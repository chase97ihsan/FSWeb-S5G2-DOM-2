import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!

const a= document.querySelector(".img-content img");

a.addEventListener("mouseover",()=>{
    a.style.filter= "grayscale(100%)"
    
    })

   /* Tüm resimlere aynı işlemi uygulamak istiyorsak döngüye sokmalıyız, array olacağı için;
    
   document.querySelectorAll("img").forEach(resim=>{
        resim.addEventListener("mouseover",(e)=>{
            e.target.style.filter= "grayscale(100%)"
        })
    })*/
    a.addEventListener("mouseout",()=>{
        a.style.filter= "grayscale(0%)"
        
        })

        
      
        

      window.addEventListener("load",()=>{
        setTimeout(()=>{
       return  document.querySelector("html").style.background="pink";
        },5000);
       
      })
      const b=document.querySelectorAll("img");
      b.forEach(resim=>{
       resim.addEventListener("click",()=>{
            resim.style.width="50%";
            resim.style.height="50%";
            
          })
    

      })
      b.forEach(resim=>{
        resim.addEventListener("dblclick",()=>{
             resim.style.width="100%";
             resim.style.height="100%";
             
           })
     
 
       })
       document.addEventListener("keypress",(event)=>{
         
           let key=event.key;
           if(key=="a"){
            b.forEach(resimm=>{
                resimm.removeEventListener("click",()=>{});
             }) 
           }
       })

      


     
     

     /* window.onscroll=function(event){
        const scroll= window.pageYOffset;
        if(scroll<300){
            c.style.backgroundcolor="#fff";
        }else if(scroll>=300&&scroll<600){
            c.style.backgroundcolor="pink";

        }else{
            c.style.backgroundcolor="white";
        }

      };*/

      window.addEventListener("resize",()=>{
        if(window.outerWidth<600){
            console.log("ds");
            document.querySelector("body").style.background="red";
        }
    });
     
      