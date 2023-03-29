export class Article{
    constructor(title, writer, id, content, createTime, likes){
        this.title = title;
        this.writer = writer;
        this.id = id;
        this.content = content;
        this.createTime = createTime;
        this.likes = likes;
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