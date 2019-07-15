import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

//@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    private Map<String, User> users;
    private boolean hasUser;

    @Override
    public void init() throws ServletException {
//        super.init();

        UsersDB usersDB = new UsersDB();

        this.users = usersDB.getUsers();
        this.hasUser = false;

//        users = new UsersDB();
    }

    @Override
    public void destroy() {
//        super.destroy();
        this.users = null;
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {


        String userName = request.getParameter("username");
        String password = request.getParameter("password");
        String remember = request.getParameter("remember");

        if(validateUser(userName, password)){

            HttpSession session = request.getSession();
            session.setMaxInactiveInterval(5 * 60);
            session.setAttribute("user", userName);
            if(remember == null){
                removeCookie(request.getCookies(), response);
            } else {
                setCookie("user", userName, response);
            }
            setCookie("promo", "$100", response);
//                response.sendRedirect("/welcome");
            response.sendRedirect("/welcome.jsp");
//                return;

//            response.getWriter().println("Hello, World!");

        }else{

            PrintWriter out = response.getWriter();

            if(this.hasUser){

                //            out.print("<%@ page contentType=\"text/html;charset=UTF-8\" language=\"java\" %>\n" +
                out.printf("<html>\n" +
                        "<head>\n" +
                        "  <title>$Title$</title>\n" +
                        "</head>\n" +
                        "<body>\n" +
                        "\n" +
                        "Please, insert a valid password for the user %s. <br>\n" +
                        "\n" +
                        "<a href=\"/\"> Return to login page</a>\n" +
                        "\n" +
                        "\n" +
                        "</body>\n" +
                        "</html>", request.getParameter("username"));






            }
            else{

                //            out.print("<%@ page contentType=\"text/html;charset=UTF-8\" language=\"java\" %>\n" +
                out.printf("<html>\n" +
                        "<head>\n" +
                        "  <title>$Title$</title>\n" +
                        "</head>\n" +
                        "<body>\n" +
                        "\n" +
                        "Please, insert a valid username and password. <br>\n" +
                        "\n" +
                        "<a href=\"/\"> Return to login page</a>\n" +
                        "\n" +
                        "\n" +
                        "</body>\n" +
                        "</html>");

            }

            this.hasUser = false;



        }



    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

//        response.getWriter().println("Hello, World!");

    }

    protected boolean validateUser(String userName,  String password){

//        String userName = request.getParameter("username");
//        String password = request.getParameter("password");


//        boolean hasUser = false;

        outerloop:
        for(String username: this.users.keySet()){

            User currentUser = this.users.get(username);

            if (currentUser.getUsername().equals(userName)){
                this.hasUser=true;

                if (currentUser.getPassword().equals(password)){
                    return true;
                }else{
                    break outerloop;
                }
            }

        }



        return false;

    }


    private void setCookie(String name, String value, HttpServletResponse resp){
        int lifetime = 30 * 24 * 60 * 60;
        Cookie cookie = new Cookie(name, value);
        cookie.setMaxAge(lifetime);
        resp.addCookie(cookie);
    }

    private void removeCookie(Cookie[] cookies, HttpServletResponse resp){
        for(Cookie ck: cookies){
            if(ck.getName().equals("user")){
                ck.setMaxAge(0);
                resp.addCookie(ck);
                return;
            }
        }
    }


}
