

const Jsonreducer = (state={todo:[]},action) => {
switch(action.type){
    case "Json-todo":{
       return { ...state,todo:action.payload}
    }
}
return state
}

export default Jsonreducer
