import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Icon',
  standalone: true
})
export class IconPipe implements PipeTransform {

  transform(value: string) :string{
switch(value){
  case 'love':
    {
  return "❤️";
  break;
}
  case 'smile':
    {
  return "😊";break;
}
  case 'song':
    {
      return "🎤";
      break;
    }
case 'bicycle':
  {
    return '🚲';
    break;
  }
  case 'bye':
    {
      return '👋';
      break;
    }
    default:
      {
        return '🫥';
        break;
      }
}  }

}
