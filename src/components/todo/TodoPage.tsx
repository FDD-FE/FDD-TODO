import {useState, useEffect} from 'react'
//import * as T from './TodoStyle'

interface List {
    id : number,
    title : string,
    checked : boolean,
}

const TodoPage = () => {
   
    const [list, setList] = useState<List[]>([]);
    const [title, setTitle] = useState("");

    /*투두 리스트 추가*/
    const addList = () => {
        if (title) { 
            const newList: List = {
                id: new Date().getTime(),
                title: title,
                checked: false,
            };
            const updatedList = [...list, newList];
            setList(updatedList);
            localStorage.setItem('todos', JSON.stringify(updatedList));
            setTitle(""); 
        }
    };

    /*투두 리스트 삭제*/
    const removeList = (index: number) => {
        const newList = [...list];
        // splice : 인덱스의 특정 요소를 제거할 때 사용함(1p = index번호, 2p = 제거할 요소의 개수)
        newList.splice(index, 1);
        setList(newList);
        localStorage.setItem('todos', JSON.stringify(newList));
    };

    /*할일 완료 처리*/
    const onCheckboxClick = (index: number) => {
        const updatedList = list.map((item, i) => 
            i === index ? { ...item, checked: !item.checked } : item
        );
        setList(updatedList);
        localStorage.setItem('todos', JSON.stringify(updatedList));
    };

    /*저장소에서 리스트 불러오기*/
    useEffect(() => {
        const localList = localStorage.getItem('todos');
        if (localList) setList(JSON.parse(localList));
    }, []);



    return (
    <>
        <div className="my-20 text-[30px] font-semibold text-[#E1D8EC]">TODO</div>
        <div className="flex h-12 w-full items-center justify-center gap-1.5">
            <input type="text" placeholder='할 일 입력' 
                   className="outline-none h-5 w-3/4 border border-[#E1D8EC] p-5 rounded-full" 
                   value={title} 
                   onChange={(e) => setTitle(e.target.value)} />
            <div className="text-[18px] font-bold text-white flex items-center justify-center rounded-full px-4 py-3 bg-[#E1D8EC]" 
                 onClick={addList}>추가
            </div>
        </div>
        <div className="flex flex-col p-2.5 px-10 w-full gap-5">
            <p className="text-xl font-semibold mb-5">앞으로 할 일이 {list.filter(item => !item.checked).length}개 남았어요!</p>
            
            {list.map((item, index) => {
                return (
                    <div className="flex items-center">
                        <input type="checkbox" checked={item.checked} onChange={() => onCheckboxClick(index)}  /> 
                        <p className={item.checked ? "w-[300px] text-3xl ml-1.5 line-through" :"w-[300px] text-3xl ml-1.5"}>{item.title}</p>
                        <p className="text-3xl" onClick={() => removeList(index)}>❌</p>
                    </div>
                
                );
            })}

        </div>

    </>
  )
}

export default TodoPage
