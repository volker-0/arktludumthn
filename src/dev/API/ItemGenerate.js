function ItemGenerate(){
	this.items = [];
	this.addItem = function(id, random, count, data){
		random = random || 1;
		count = count || {};
		count.min = count.min || 1;
		count.max = count.max || 1;
		data = data||0;
		this.items.push({id:id,random:random,count:count,data:data});
	}
	this.fillChest = function(x, y, z, region, random){
		region = region || BlockSource.getCurrentWorldGenRegion();
		random = random || new java.util.Random();
		let container = World.getContainer(x, y, z, region);
		if(!container)
			return;
		for(let i in this.items){
			let obj = this.items[i];
			if(random.nextFloat() <= obj.random){
				container.setSlot(random.nextInt(27), obj.id, Math.floor(Math.random() * (obj.count.max - obj.count.min))+obj.count.min, obj.data, null);
			}
		}
	}
}