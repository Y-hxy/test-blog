import { get } from '@/request'

// 首页
export function getData(){
	return get('/static/home/list.json')
}

export function getTabData(){
	return get('/static/tab/list.json')
}

export function getMineInfo(){
	return get('/static/mine/info.json')
}

export function getComicInfo(){
	return get('/static/comic/list.json')
}

export function getGalleryInfo(){
	return get('/static/gallery/list.json')
}