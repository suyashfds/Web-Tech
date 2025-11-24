import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import java.io.File;
import java.util.Scanner;

public class UserSearch {

    public static void main(String[] args) {
        try {
            // 1. Take User Input
            Scanner scanner = new Scanner(System.in);
            System.out.print("Enter User ID to search (e.g., 101): ");
            String searchId = scanner.nextLine();

            // 2. Load the XML File
            File inputFile = new File("users.xml");
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            Document doc = dBuilder.parse(inputFile);
            
            // Normalize the XML structure (removes empty text nodes caused by formatting)
            doc.getDocumentElement().normalize();

            // 3. Get all 'user' nodes
            NodeList nList = doc.getElementsByTagName("user");
            boolean found = false;

            System.out.println("\n--- Search Results ---");

            // 4. Iterate through the nodes
            for (int temp = 0; temp < nList.getLength(); temp++) {
                Node nNode = nList.item(temp);

                if (nNode.getNodeType() == Node.ELEMENT_NODE) {
                    Element eElement = (Element) nNode;

                    // Get the ID from the current XML element
                    String id = eElement.getElementsByTagName("id").item(0).getTextContent();

                    // Check if it matches the user input
                    if (id.equals(searchId)) {
                        System.out.println("User Found!");
                        System.out.println("ID: " + id);
                        System.out.println("Name: " + eElement.getElementsByTagName("name").item(0).getTextContent());
                        System.out.println("Department: " + eElement.getElementsByTagName("department").item(0).getTextContent());
                        System.out.println("Email: " + eElement.getElementsByTagName("email").item(0).getTextContent());
                        found = true;
                        break; // Stop the loop once found
                    }
                }
            }

            if (!found) {
                System.out.println("User with ID " + searchId + " not found.");
            }

            scanner.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}