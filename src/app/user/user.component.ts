import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service' 

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  providers: [PostsService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showhobbies: boolean;
  posts: posts[];
  

  constructor(private PostsService: PostsService) {
    this.name = 'vivak';
    this.email = 'vk2853@gmail.com';
    this.address = {
    city: 'kollam',
    state : 'kerala',
    road: "M.G",
   }
   this.hobbies = ["Reading", "writing", "swimming"];
   this.showhobbies = true;
   this.PostsService.getposts().subscribe(posts=>{this.posts = posts}); 
  }

  showhobby()
  {
  if (this.showhobbies == true)
    {
       this.showhobbies = false;
    }  
    else
    {
      this.showhobbies = true;
    }
  }

addHobby(hobby)
{
  this.hobbies.push(hobby);
}

deleteHobby(index)
{
  this.hobbies.splice(index,1)
}
 ngOnInit() {
  
}
}
   interface address{
     city: string;
     state: string;
     road: string;
   }


   interface posts{
     id: number;
     title: string;
     road: string;
   }
