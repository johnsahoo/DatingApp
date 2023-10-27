import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { Member } from 'src/app/_models/member';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  standalone: true,
  imports: [CommonModule, GalleryModule]
})
export class MemberDetailComponent {
  member: Member | undefined;
  images: GalleryItem[] = [];
  constructor(private memberService: MembersService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    var username = this.route.snapshot.paramMap.get("username");
    // console.log(username);
    if(username) {
      this.memberService.getMember(username).subscribe({
        next: member => {
          this.member = member;
          this.getImages();
        }
      });
    }
  }

  getImages() {
    if(!this.member) return;
    for(const photo of this.member.photos) {
      this.images.push(new ImageItem({src: photo.url, thumb: photo.url}));
    }
  }

}
