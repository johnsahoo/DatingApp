import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent {
  members$: Observable<Member[]> | undefined; 
  constructor(private memberService: MembersService) {}

  ngOnInit(){
    this.members$ = this.memberService.getMembers();
  }
  // loadMembers() {
  //   return this.memberService.getMembers().subscribe({
  //     next: members=> this.members = members
  //   })
  // }

}