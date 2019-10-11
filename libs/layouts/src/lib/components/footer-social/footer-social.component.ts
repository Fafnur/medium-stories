import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface SocialLink {
  icon: IconProp | string;
  link: string;
}

@Component({
  selector: 'medium-stories-footer-social',
  templateUrl: './footer-social.component.html',
  styleUrls: ['./footer-social.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterSocialComponent {
  socialLinks: SocialLink[] = [
    {
      icon: 'facebook-f',
      link: '//www.facebook.com/LamborghiniRussia'
    },
    {
      icon: 'vk',
      link: '//vk.com/lamborghini'
    },
    {
      icon: 'twitter',
      link: '//twitter.com/lamborghini'
    },
    {
      icon: 'youtube',
      link: '//www.youtube.com/c/lamborghini'
    },
    {
      icon: 'instagram',
      link: '//www.instagram.com/lamborghini'
    },
    {
      icon: 'pinterest-p',
      link: '//www.instagram.com/lamborghini'
    },
    {
      icon: 'telegram-plane',
      link: '//telegram.me/lamborghini'
    }
  ];
}
