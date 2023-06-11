import { Component,Input, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img-display',
  templateUrl: './img-display.component.html',
  styleUrls: ['./img-display.component.css']
})
export class ImgDisplayComponent implements OnInit, OnDestroy {
  @ViewChild('img') img!:ElementRef
  @ViewChild('desc') desc!:ElementRef 
  // @Input() imgNameAndDes!:{name: string, desc: string}
  changePhotoInterval!:any
  fadeInterval!:any
  currentImageIndex:number= 0
  
  @Input() setD(imgNameAndDes:{name: string, desc: string}){
    imgNameAndDes.desc = `../assets/res/photos/${imgNameAndDes.name}`
    // this.img.nativeElement.backgroundImage = `url(../assets/res/photos/${imgNameAndDes.name})`
  } //imgNameAndDes!:{name: string, desc: string} 

  imgNameAndDes:{name: string, desc: string}[]=[
    {name:'../../assets/res/photos/school1.jpeg', desc:'school1'},
    {name:'../../assets/res/photos/school2.jpg', desc:'school2'},
    {name:'../../assets/res/photos/bandipur.jpg', desc:'bandipur'}
  ]

  constructor() { }

  ngOnInit() {
    this.changePhotoInterval = setInterval(
      ()=>{ 
    //     this.img.nativeElement.style.opacity='0'
    //     this.fadeInterval = 
    //     setTimeout(()=>{
          this.currentImageIndex = (++this.currentImageIndex)%this.imgNameAndDes.length
          this.img.nativeElement.setAttribute('src',this.imgNameAndDes[this.currentImageIndex].name)
          this.desc.nativeElement.textContent = this.imgNameAndDes[this.currentImageIndex].desc
          this.img.nativeElement.style.opacity='1'
    //     }, 1500)
      },
      4000
    )
  }

  ngOnDestroy(){
    clearInterval(this.changePhotoInterval)
    clearInterval(this.fadeInterval)
  }
}
