public abstract class Art {
    private String title;
    private String author;
    private String description;

public Art(){

}
public Art (String title,String author,String description){
    this.author=author;
    this.title=title;
    this.description=description;
}

    abstract void viewArt();



    //Getters and Setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
