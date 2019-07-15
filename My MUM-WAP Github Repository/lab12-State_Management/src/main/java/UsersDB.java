import java.util.HashMap;
import java.util.Map;

public class UsersDB {


    private Map<String, User> users;


    public UsersDB() {

        users = new HashMap<String, User>();

        User user1 = new User("Paul", "456");
        User user2 = new User("Ringo", "789");
        User user3 = new User("George", "369");

        users.put(user1.getUsername(), user1);
        users.put(user2.getUsername(), user2);
        users.put(user3.getUsername(), user3);

    }

    public Map<String, User> getUsers() {
        return users;
    }
}
