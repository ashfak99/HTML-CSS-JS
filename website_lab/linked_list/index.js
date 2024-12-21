class node{
    constructor(data,node){
        this.data=data;
        this.next=next;
    }
    getData(){
        return this.data;
    }
}
class linkedlist{
    init(){
        this.head= new node("Ashfak",null);

        var alam= new node("Alam",null);
        this.head.next=alam;

        var akbar= new node("Akbar",null);
        alam.next=akbar;

        this.tail= new node("Hasrat",null);
        akbar.next=this.tail;

        return this.head;
    }
}