Cookie={
	cookie:function(key, value, options){
		options = options || {};
		//write
		if(value!==undefined){
			if(typeof options.expires==='number'){
				var days=options.expires, t=options.expires=new Date();
				t.setDate(t.getDate()+days);
			}
			return (document.cookie=[
				key,'=',value,
				options.expires?   ';expires='+options.expires.toUTCString() : '',
				options.path?      ';path='+options.path : '',
				options.domain?    ';domain='+options.domain : '',
				options.secure?    ';secure' : ''
			].join(''));
		}
		//read
		var cookies=document.cookie? document.cookie.split(';') : [];
		for(var i=0; l=cookies.length, i<l;i++){
			var parts=cookies[i].split('=');
			var name=parts.shift();
			if(key===name){
				return parts.join('=');
			}
		}
		
	},
	removeCookie:function(key){
		if(Cookie.cookie(key)!==undefined){
			Cookie.cookie(key,'',{expires:-1});
			return true;
		}
		return false;
	}
}