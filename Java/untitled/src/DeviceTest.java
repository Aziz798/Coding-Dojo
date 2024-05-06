import com.Devices.Phone.Phone;

public class DeviceTest {
    public static void main(String[] args){
        Phone phone = new Phone();
        phone.playGame().playGame().playGame().playGame().playGame().charge().charge().charge();
        System.out.println(phone.getBattery());
    }
}
