public class Painting extends Art{
    private String paintType;
    public Painting(String paintType,String title,String author,String description){
        super(title,author,description);
        this.paintType = paintType;
    }
    public Painting(){
        super();
    }

    @Override
    public void viewArt() {

    }

    public String getPaintType() {
        return paintType;
    }

    public void setPaintType(String paintType) {
        this.paintType = paintType;
    }
}
