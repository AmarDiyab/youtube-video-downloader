import express from 'express';
import ytdl from 'ytdl-core';

var app = express();

app.listen('4000', function(){
	console.log("listening on 4000");
});

app.get('/download', function(req, res) {
	var link = req.query.url;
	var format = req.query.format;
	var quality = req.query.quality;

	video = ytdl(link,{
		format:format,
		quality:quality,
	});
	video.pipe(res);
});