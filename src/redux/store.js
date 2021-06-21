import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import itemsReducer from './items/reducer'
import statsReducer from './stats/reducer'
import storyReducer from './story/reducer'
import combatReducer from './combat/reducer'

const rootReducer = combineReducers({
  stats: statsReducer,
  items: itemsReducer,
  story: storyReducer,
  combat: combatReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;