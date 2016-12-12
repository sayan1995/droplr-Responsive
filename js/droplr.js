function droplr()
{
	this.data = '[\
				{"url":"../images/alone.jpg","name":"Alone.jpg","timestamp":"41 minutes ago"},\
				{"url":"../images/cat.jpg","name":"Cat.jpg","timestamp":"1 hours ago"},\
				{"url":"../images/fire.jpg","name":"Fire.jpg","timestamp":"2 hours ago"},\
				{"url":"../images/Fotolia.jpg","name":"Fotolia.jpg","timestamp":"31 minutes ago"},\
				{"url":"../images/Free.jpg","name":"Free.jpg","timestamp":"10 seconds ago"},\
				{"url":"../images/leaf.jpg","name":"Leaf.jpg","timestamp":"4 days ago"},\
				{"url":"../images/love.jpg","name":"Love.jpg","timestamp":"3 minutes ago"},\
				{"url":"../images/web.jpg","name":"Web.jpg","timestamp":"12 hours ago"},\
				{"url":"../images/doggie.jpg","name":"doggie.jpg","timestamp":"10 seconds ago"},\
				{"url":"../images/comp.jpg","name":"comp.jpg","timestamp":"1 minute ago"}\
				]';
	this.len = this.data.length;
	this.load();
}
droplr.prototype.load =function () {
	//format of data-JSON
	//[filelist:[url:,name,time]]
	//time would usually consist of a timestap in GMT and we would need to convert this to the difference between current time
	//and end that time stamp(eg 3 hrs ago),but due to lack of time on my end I have just added this difference in time to the array
	
	
	data = JSON.parse(this.data);
	
	for (i = 0; i < this.len-1; i++) {
		try {
		p = $('<div/>').attr('class', 'col-md-15');
		$(p).addClass('col-lg-15');
		$(p).addClass('col-sm-15');
		$(p).addClass('col-xs-15');
		console.log(p);
		this.generate(data[i].url, data[i].name, data[i].timestamp, p, i + 1);
		$('.display-area').append(p);
		}
		catch(err)
		{}
	}
}

droplr.prototype.generate =function (url, name, time, div, i) {
	var card = ['<div id = "card-' + i + '">\
				<center><img class="image-url block-inline" src="' + url + '"></center>\
				<div class="break"></div>\
				<b class="image-name">' + name + '</b>\
				<div class="image-time">' + time + '</div>\
				</div>'];
	$(p).append(card);
}

function init()
{
	new droplr();
}
