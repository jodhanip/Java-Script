student = {
    first_Name:"Jaldip",
    last_Name:"Bhalani",
    roll_No:10,
    acc:95,
    stat:95,
    eng:69,
    total:0,
    pr:0,
    ps:"",
    g:"",
    // get_full_Name:function(){
    //     return `${this.first_Name} ${this.last_Name}`;
    // },
    result:function(){
        var test;
        test=true
        this.total=this.acc+this.stat+this.eng
        prr=this.total/3
        this.pr=(prr.toFixed(2))
        if(this.acc>33 && this.stat>33 && this.eng>33){
            (this.pr>90)?this.g='A':(this.pr>80)?this.g='B':(this.pr>70)?this.g='C':(this.pr>60)?this.g='D':0
            this.ps="pass"
        }
        else{
            this.ps="fail"
            this.g="F"
        }
        return true
    }
}
if(student.result()==true){
    console.table(student)
}