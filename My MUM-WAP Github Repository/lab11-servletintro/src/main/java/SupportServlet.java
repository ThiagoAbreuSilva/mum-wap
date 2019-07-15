import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;

public class SupportServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        super.doGet(req, resp);

//        resp.getWriter().println("Hello, World!");

        PrintWriter out = resp.getWriter();

        out.print("<html>\n" +
                "  <head>\n" +
                "    <title>$Title$</title>\n" +
                "  </head>\n" +
                "  <body>\n" +
                "  <form action=\"/support\" method=\"post\">\n" +
                "\n" +
                "    Name: <input name=\"uName\"> <br>\n" +
                "    Email address: <input name=\"email\"> <br>\n" +
                "    Problem: <input name=\"problem\"> <br>\n" +
                "    Problem description: <textarea name=\"problemDescription\"></textarea> <br>\n" +
                "\n" +
                "    <button type=\"submit\">\n" +
                "\n" +
                "      <label>help</label>\n" +
                "\n" +
                "    </button>\n" +
                "\n" +
                "  </form>\n" +
                "  </body>\n" +
                "</html>");

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        super.doPost(req, resp);

        // create instance of Random class
        Random rand = new Random();

        String u_name = req.getParameter("uName");
        String email = req.getParameter("email");
//        String problem = req.getParameter("problem");
//        String problem_description = req.getParameter("problemDescription");

        ServletContext sc = this.getServletContext();
        String support_email = sc.getInitParameter("support-email");

        // Generate random integers in range 0 to 999
        int rand_int = rand.nextInt(1000);

        PrintWriter out = resp.getWriter();

        out.print(String.format("Thank you! %s for contacting us. We should receive reply from us with in 24 hrs in your email address %s. Let us know in our support email %s if you don't receive reply within 24 hrs. Please be sure to attach your reference %s in your email. ", u_name, email, support_email, rand_int));



    }
}
