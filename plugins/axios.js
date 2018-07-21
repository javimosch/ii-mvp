import axios from 'axios'

export default axios.create({
	baseURL: process.env.RPC_ENDPOINT
})

if(process.client){
	window.RPC_ENDPOINT = process.env.RPC_ENDPOINT
}


