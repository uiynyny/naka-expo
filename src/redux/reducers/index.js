import {loginReducer} from './loginReducer';
import {MessageReducer} from './MessageReducer';
import {GroupReducer} from './GroupReducer';

import {combineReducers} from 'redux';
import {UserImageCacheReducer} from './UserImageCacheReducer';
import {BlurRateReducer} from './BlurRateReducer';
import {ContentReducer} from "./ContentReducer";

const rootReducer = combineReducers({
    user: loginReducer,
    messages: MessageReducer,
    groups: GroupReducer,
    userImageCache: UserImageCacheReducer,
    blurRate: BlurRateReducer,
    content: ContentReducer
});
export default rootReducer;
