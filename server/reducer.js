"use strict";
// function Provider({initialState, children}){
//     const Context = StoreContext
//     // let state=initialState
//     let [state, setState] = React.useState()
//     const contextValue = useStateContext()
//     // setState(initialState)
//     let Store= store()
//     const dispatch = (props)=>{
//         let key:any = Object.keys(props)
//         console.log("##########", state)
//         contextValue.dispatch(props)
//         console.log("%%%%%%%%%%%",contextValue);
//         let prevState=state
//         setState({...prevState, [key]: props[key]})
//     }
//     return(
//         <Context.Provider value={{state: {...state}, store: {Store, dispatch: (props)=>dispatch(props)}}}>
//             {children}
//         </Context.Provider>
//
//     )
// }
