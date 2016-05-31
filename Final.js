$(function() {
        var APPLICATION_ID = "149F7F09-124D-FBB8-FFAA-50E2F872F100",
            SECRET_KEY = "FEFAFA1E-4B4A-58D9-FF1F-6394A5DE5D00",
            VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
   
    var postsCollection = Backendless.Persistence.of(Posts).find();
    console.log(postsCollection);
    
    var wrapper = {
        posts: postsCollection.data
    };
    
    Handlebars.registerHelper('format', function (time) {
       return moment(time).format("dddd, MMMM do YYYY");
    });
    
    var blogScript = $("#blogs-template").html();
    var blogTemplate = Handlebars.compile(blogScript);
    var blogHTML = blogTemplate(wrapper);

    $('.main-container').html(blogHTML);
 
});

function Posts(args){
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail ||"";
}  