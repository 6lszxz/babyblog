import MD5 from 'crypto-js/md5'

export class Article{
    constructor(title, author, content){
        this.title = title;
        this.author = author;
        // 作者的用户id
        this.createTime = Date.now();
        // id使用MD5-16进行加密，这样可以生成一段16位的短id
        this.id = MD5(`${author}${this.createTime}`).toString().slice(0,16);
        this.content = content;
        // 刚创建的文章怎么可能会有赞呢
        this.likes = 0;
    }
    updateTitle(newTitle){
        if(this.title !==newTitle){
            this.title = newTitle;
            // updateToServer
        }
        
    }
    updateContent(newContent){
        // 因为content太长，在这里不做判断。
        this.content = newContent;
        // updateToServer
    }
    likesUp(){
        this.likes++;
        // updateToServer
    }
    likesDown(){
        this.likes--;
        // updateToServer
    }

}