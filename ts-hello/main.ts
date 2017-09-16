import {Like} from './likes';

let likes = new Like(1);

likes.giveLike();

console.log(likes.NumberOfLikes);

likes.giveLike();

console.log('After ' + likes.NumberOfLikes);
