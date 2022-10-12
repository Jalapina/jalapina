import org.junit.Test;
import static org.junit.Assert.*;
 
 
public class Main {


    public class Student {
        public String displayStudentName(String firstName, String lastName) {
            return firstName + lastName;
        }
   }


    public class StudentTest {
        @Test
        public void testDisplayStudentName() {
            Student student = new Student();
            String studentName = student.displayStudentName("Anshuman", "Nain");
            assertEquals("AnshumanNain", studentName);
        }
    }
    

}
 
