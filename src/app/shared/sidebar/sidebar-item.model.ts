import { HeroIconName } from 'ng-heroicons';

export interface ListItemModel {
  id: string;
  color: string;
  shade: string;
  icon: HeroIconName;
  fillIcon: HeroIconName;
  text: string;
  badge: string;
  subItems: ListItemModel[] | undefined;
}
