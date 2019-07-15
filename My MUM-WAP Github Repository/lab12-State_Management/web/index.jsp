<%--
  Created by IntelliJ IDEA.
  User: thiago
  Date: 7/11/19
  Time: 6:01 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>$Title$</title>
</head>
<body>

<form action="/login" method="post">



  Username: <input type="text" name="username" value=${cookie.user.value != null ? cookie.user.value : null}><br>
  Password: <input type="text" name="password"><br>

  <label><input type="checkbox" name="remember" ${cookie.user.value != null ? "checked" : null}> Remember me</label>
  <br />


  <button type="submit">Login</button>



</form>

<%--  $END$--%>
</body>
</html>