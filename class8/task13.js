count=0
const v=[]
const countvowel=(string)=>{
    return v.push(string.match(/[bcdfghjklmnpqrstvwxyz]/gi) || 0)
    
}
countvowel("ashok")
console.log(v);
