import page from './base/pagelife'
import touch from './base/touch'
import scroll from './base/scroll'

import observer from './components/observer'
import swiper from './components/swiper'
import flatlist from './components/flatlist'
import dirtycheck from './components/dirtycheck.js'
import clusterize from './components/clusterize'
import virtualize from './components/virtualize'

const Observer = function(obj){return new observer(obj)};
const Swiper = function(obj){return new swiper(obj)};
const Page = function(obj){return new page(obj)};
const Touch = function(obj){return new touch(obj)};
const FlatList = function(obj){return new flatlist(obj)};
const Clusterize = function(obj){return new clusterize(obj)};
const Virtualize = function(obj){return new virtualize(obj)};
const Scroll = function(obj){return new scroll(obj)};
const Dirty = function(obj){return new dirtycheck(obj)};

export {
    Observer,
    Swiper,
    Page,
    Touch,
    FlatList,
    Clusterize,
    Virtualize,
    Scroll,
    Dirty
};
