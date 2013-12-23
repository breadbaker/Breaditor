this.photoEditor = new DE.PhotoEditor({
      'overlay': $('overlay.high'),
      'mainAreaSelector': 'texttextarea',
      'postUrl': '/photos',
      'data':{
        'post_id': Tumblr.currentPost.get('id') //that.model.get('id')
      }
    });
