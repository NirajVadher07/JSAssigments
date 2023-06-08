class App{
    constructor(WrapperElement){
        this.WrapperElement = WrapperElement;
        this.billboard = new Array();
        this.index = 0;
    }

    setBillBoard(e){
        // let newmainlist = new Array();
        const temp = {
            name:e,
            list: new List(this.index), 
        }
        this.index ++ ;
        this.billboard.push(temp);
        this.renderBillBoard();        
    }

    getBillBoard(){
        return this.billboard;
    }

    renderBillBoard(){   
        this.WrapperElement.innerHTML = '';        
        console.log(this.billboard);
        if(this.billboard.length == 0){
            this.WrapperElement.innerHTML = `<h1 class="text-3xl text-white font-bold italic">Empty</h1>            `
        }
        else{
            this.billboard.forEach( (e,index) => {
                let div = document.createElement('div');
                e.list.index =  index;
                div.innerHTML = `
                <div id="${index}" class="min-w-[300px] max-w-fit p-2 m-1 mt-5 bg-white text-black rounded-lg min-h-[300px]">
                    <div class="text-2xl font-bold italic text-[#5A20CB] border-b-[2px] border-black flex justify-between items-center">
                        <input class="text-xl mr-5 p-1 min-w-fit" id="title" value="${e.name}" readonly>                    
                        <div class="text-sm">
                            <button class="text-[#4DD637] pr-2" id="editTitle">EDIT</button>
                            <button class="text-[#E21717]" id="deleteBillBoard">DELETE</button>
                        </div>
                    </div> 
                    <div id="sublist${index}">                      
                    </div>
                </div>`;                           
                this.AddFunctionality(div, e.name, index);
                this.WrapperElement.appendChild(div);
                e.list.renderList();
            } )
        }
    }    

    AddFunctionality(div, title , index){
        let input = div.querySelector("#title");

        if(input.value == title){
            let edit = div.querySelector("#editTitle");
            let Delete = div.querySelector("#deleteBillBoard");
            edit.addEventListener('click', () => {
                if (edit.innerText.toLowerCase() == "edit") {
                    edit.innerText = "SAVE";
                    input.removeAttribute("readonly");
                    input.focus();
                } else {
                    edit.innerText = "EDIT";
                    this.billboard[index].name = input.value;                
                    // console.log(this.getBillBoard());
                    input.setAttribute("readonly", "readonly");                
                }            
            });

            Delete.addEventListener('click', () => {			
                this.billboard.splice(index,1);            
                this.renderBillBoard();
                // console.log(this.getBillBoard());
            });
        }
    }
}

class List{

    constructor(index){
        this.list = new Array();         
        this.index = index;                  
    }

    setList(e){
        this.list.push(e);
        // this.renderList();
    }

    getList(){
        return this.list;
    }

    renderList(){                
        this.WrapperElement = document.getElementById(`sublist${this.index}`);        
        this.WrapperElement.innerHTML = '';
        if(this.list.length == 0 ){
            this.WrapperElement.innerHTML = `<h1 class="text-lg text-[#5A20CB] font-semibold italic text-center">Empty</h1>            `
        }
        else{
            this.list.forEach((value,index)=>{
                let div = document.createElement("div");
                div.innerHTML = `
                <div id="list${index}" class="text-md flex justify-between items-center">
                        <div>
                            <i class="fa-regular fa-circle-right fa-md" style="color: #000000;"></i>
                            <input class="text-md mr-5 p-1 min-w-fit" id="sublisttitle" value="${value}" readonly>                                            
                        </div>
                        <div class="text-sm flex justify-evenly items-center font-semibold">
                            <button class="text-[#4DD637] pr-2" id="edititem">EDIT</button>
                            <button class="text-[#E21717]" id="deleteitem">DELETE</button>
                        </div>
                </div>`     

                this.WrapperElement.appendChild(div);             
            })       
        }        
        let Editdiv = document.createElement("div");
        Editdiv.innerHTML = `
            <div id="list${this.list.length}" class="text-md flex justify-between items-center">
                <div>
                    <i class="fa-regular fa-circle-right fa-md" style="color: #000000;"></i>
                    <input class="text-md mr-5 p-1 min-w-fit bg-white" id="sublisttitle" placeholder="Add item..." >                                                                    </div>
                <div class="text-sm flex justify-evenly items-center font-semibold">
                    <button class="text-[#4DD637] pr-2" id="edititem">SAVE</button>
                    <button class="text-[#E21717]" id="deleteitem">DELETE</button>
                </div>
            </div>`   
        // let addtiondiv = document.createElement('div');
        // addtiondiv.innerHTML =`
        // <div class="w-full flex justify-center items-center p-5">
        // <button id="additem" class=" w-1/2 rounded-full bg-[#5A20CB] text-white font-semibold"><i class="fa-solid fa-plus fa-lg text-white"></i> ADD ITEM</button>
        // </div>`
        // this.WrapperElement.appendChild(addtiondiv)
        this.WrapperElement.appendChild(Editdiv);
        this.AddFunctionalityList(this.WrapperElement)
    }

    AddFunctionalityList(div){
        // let addtolist = div.querySelector("#additem");
        // addtolist.addEventListener('click', () => {
        //     this.setList("New Item...");
        // });
        for (let index = 0; index <= this.list.length; index++) {
            let list = div.querySelector(`#list${index}`);

            let input = list.querySelector("#sublisttitle");

        
            let edit = list.querySelector("#edititem");
            let Delete = list.querySelector("#deleteitem");            
            edit.addEventListener('click', () => {
                if (edit.innerText.toLowerCase() == "edit") {
                    edit.innerText = "SAVE";
                    input.removeAttribute("readonly");
                    input.focus();
                } else {
                    edit.innerText = "EDIT";
                    this.list[index] = input.value;                                    
                    input.setAttribute("readonly", "readonly");                
                    this.renderList();
                }            
            });

            Delete.addEventListener('click', () => {			
                this.list.splice(index,1);            
                this.renderList();                
            });                    
        }
    }
}



const display = document.getElementById('display')
const Project = new App(display);
let addnewlist = document.getElementById('addnewlist');


addnewlist.addEventListener('click', ()=>{
    Project.setBillBoard('Untitled');
})

