import { Component, ElementRef, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @ViewChild('contentLeft') contentLeft !:ElementRef
 
  constructor(   
    public el: ElementRef, 
    public renderer: Renderer2, 
    ) { 
    renderer.listen(el.nativeElement, 'click', (event) => {
      // console.log
      if(event.target.tagName.toLowerCase()==='i'){
        console.log(event.target.classList)
      }
        const tabs = document.getElementsByClassName('study-item') as HTMLCollectionOf<HTMLElement>
        let expandedTab;
        for(let i=0; i<tabs.length; i++){
          // tabs[i].classList.remove('active-tab')
          if(tabs[i].contains(event.target)){
            expandedTab = tabs[i]
            console.log(expandedTab); 
            // debugger
            if(expandedTab.classList.contains('active-tab'))
              expandedTab.classList.remove('active-tab')
            else{
              expandedTab.classList.add('active-tab')
              return
            }
          }else{
            tabs[i].classList.remove('active-tab')
          }
        }
      //       const chosenAccordion = expandedTab.getElementsByClassName('accordion') as HTMLCollectionOf<HTMLElement>
      //       console.log(chosenAccordion[0].style.height)
      //       if(['0px',''].includes((chosenAccordion[0]).style.height)){
      //         chosenAccordion[0].style.height='auto'
      //         chosenAccordion[0].style.padding='.2rem .6rem';
      //         // chosenAccordion[0].style.marginTop='0'
      //       } 
      //       else{
      //         chosenAccordion[0].style.height='0px'
      //         chosenAccordion[0].style.padding='0';
      //         // chosenAccordion[0].style.marginTop='-1rem'
      //       }
              
            //('style','max-height:100px;')
          // })  
      // };
       
      // const currentPage = window.location.pathname; 
      // let routeIndex = this.routesInOrder.indexOf(currentPage) 
      // if(event.key==='ArrowRight')  
      //   router.navigate([this.routesInOrder[(routeIndex+1)%this.routesInOrder.length]])  
      // if(event.key==='ArrowLeft')  
      //   router.navigate([this.routesInOrder[((routeIndex-1)%this.routesInOrder.length)<0?(this.routesInOrder.length-1):(routeIndex-1)%this.routesInOrder.length]]) 
    });
  }

  ngOnInit() {
  }

  toggle(event:any){
    console.log('toggl: ',event.target.innerText)
    if(event.target.innerText.toLowerCase()==='education')
      this.contentLeft.nativeElement.style.left = '0%'
    else
      this.contentLeft.nativeElement.style.left = '-100%'
  
  const h3 = document.getElementsByClassName('toggler-heading')  

  h3[0].classList.remove('active')
  h3[1].classList.remove('active') 
  event.target.classList.add('active')
  }

}
