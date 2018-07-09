import axios from 'axios'
import {client as createWrapkendClient} from 'wrapkend-cli'
const wrapkend = createWrapkendClient(process.env.WRAPKEND_API_KEY||'KXSG4jIx5IhqmR1Et59tLPimJy1zFt6xitXMMbz9');
const instance = axios.create({
	baseURL: process.env.RPC_ENDPOINT
});

var actionsCallers = {};

export async function sync(){
	let actions = await call('getRpcActionsSelect');
	actions.forEach(a=>{
		actionsCallers[a.text] = (data)=>call(a.text,data);
	});
	return {
		actions,
		namesList: actions.map(a=>a.text)
	};
}

export async function wrapkendCall(name, data){
	return wrapkend(name,data)
}

export async function call(name, data){
	data = data || {};
	try{
	let res = await instance.post('rpc/'+name,{
		n:name,
		d:data
	});
	if(res.data){
		let resData = res.data;
		if(resData.err){
			throw new Error(resData.err);
		}else{
			return resData.data;
		}
	}
}
	catch(err){
		if(err.response && err.response.data&& err.response.data.err){
			throw new Error(err.response.data.err);
		}else{
			throw err;
		}
	}
}
