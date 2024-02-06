///create a start manager where user can add and remove and mark task as completed

    //a) Add task to the task list
    // b) Remove task from task list
    // c) mark task as completed
    // d)Sort task as completed
    // e)display the number of incomplete task

    let arr = []
    const addToList = (item) =>{
        return arr.push(item) ///add element in array
    }
    // console.log(addToList(1)); 
    addToList(1);
    addToList(3)
    addToList(5)
    addToList(1)
    

    const removeToList = () => {
        return arr.splice(0,1) ///////remove first index in any array
    }
    removeToList();
    

    const arrange = (item) => {
        return arr.sort(item) ///////arrange value by numerical or aphabetics
    }
    arrange();
    console.log(arr);

   