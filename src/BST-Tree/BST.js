import BSTNode from './node';

class BinarySearchTree{
    constructor(canvas){
        this.root=null;
        this._canvas = canvas;
      this._settings = {
         sAngle: 0,
         eAngle: 2 * Math.PI,
         lightGreen: '#42f4b9',
         darkGreen: '#0d866c',
         black: '#000',
         ySpace: 20
      }
    }

    clear(){
        this.root=null;
        this.draw(this._canvas);
    }

    insert(data){
    var newNode= new BSTNode(data);
    if(this.root===null){
     this.root=newNode;
    }
     else{
         _insert_data(this.root, newNode);
     }
     this.draw(this._canvas);
    }
   

    remove(data){
        var p=this.root;
        var par=null;
        while(p!==null){
            if(p.data===data){
                break;
            }
            par=p;
            if(data<p.data){
                p=p.left;
            }else{
                p=p.right;
            }
        }
        if(p===null){
            window.alert('data is not find');
        }
         

        var in_successor= null;
        var par_in=null;
        if(p.left!==null && p.right!==null){
             in_successor=p.right;
             par_in=p;
            while(in_successor.left!==null){
                par_in=in_successor;
                in_successor=in_successor.right; 
            }
                p.data=in_successor.data;
                p=in_successor;
                par=par_in
        }

        var child=null
        if(p.left!==null){
            child=p.left;
        }else{
            child=p.right;
        }

        if(par==null){
            this.root=child;
        }
        else if(p==par.left){
            par.left=child;
        }else{
            par.right=child;
        }
        
        this.draw(this._canvas);

    }

    draw(canvas, currentValue){
        canvas.height = canvas.height;
        canvas.width = canvas.width;
        const context = canvas.getContext('2d');
        const startX = ~~(canvas.width / 2);
        const startY = ~~(canvas.width / 20);
        const radius = ~~(canvas.width / 40);
        const xWidth = ~~(canvas.width / 4);
        const {
           sAngle,
           eAngle,
           lightGreen,
           darkGreen,
           black,
           ySpace
        } = this._settings;
        if (this._root !== null) {
           _drawNode(context, startX, startY, radius, sAngle, eAngle, xWidth, 0, ySpace, lightGreen, darkGreen, black, this._root, currentValue);
        }
     }
      //Tree ends here
    
 }

 //********************************************************************************************* */
 //Private function

 const _insert_data=(rootNode, newNode)=>{
    if(newNode.data<rootNode.data){
        if(rootNode.left===null){
            rootNode.left=newNode;
        }else{
        // rootNode=rootNode.left;
        this.insert_data(rootNode.left , newNode);
        }
    }

    else if(rootNode.data===rootNode.data){
        window.alert('the value is already present');
    }

    else{
        if(rootNode.right===null){
            rootNode.right=newNode;
        }else{
        this.insert_data(rootNode.right , newNode);
        }      
    }
   
}

 const _drawNode = (context, startX, startY, radius, sAngle, eAngle, xWidth, depth, ySpace, nodeBackground, borderColor, textColor, node, currentValue) => {
    /* draw node circle */
    context.beginPath();
    context.arc(startX, startY, radius, sAngle, eAngle, false);
    context.fillStyle = nodeBackground;
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = node.value === currentValue?'red':borderColor;
    context.stroke();
    context.fillStyle = textColor;
    context.font = '12px Arial bold';
    context.fillText(node.value, startX, startY);
    const leaves = Math.pow(2, depth);
    const delta_x = ~~(xWidth / 2);
    /* draw left branch */
    if (node.left !== null) {
       const nextX = startX - delta_x;
       const nextY = startY + 2 * radius + ySpace;
       context.beginPath();
       context.moveTo(startX, startY + radius);
       context.lineTo(nextX, nextY);
       context.lineWidth = 1;
       context.strokeStyle = borderColor;
       context.stroke();
       _drawNode(context, nextX, nextY, radius, sAngle, eAngle, delta_x, depth + 1, ySpace, nodeBackground, borderColor, textColor, node.left,currentValue);
    }
    /* draw right branch */
    if (node.right !== null) {
       const nextX = startX + delta_x;
       const nextY = startY + 2 * radius + ySpace;
       context.beginPath();
       context.moveTo(startX, startY + radius);
       context.lineTo(nextX, nextY);
       context.lineWidth = 1;
       context.strokeStyle = borderColor;
       context.stroke();
       _drawNode(context, nextX, nextY, radius, sAngle, eAngle, delta_x, depth + 1, ySpace, nodeBackground, borderColor, textColor, node.right,currentValue);
    }
 }

 export default BinarySearchTree;