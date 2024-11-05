package com.riyacooks.inventory.controller;
import com.riyacooks.inventory.entity.Customer;
import com.riyacooks.inventory.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/customer")
public class CustomerController {

    @Autowired
    CustomerService customerService;

    // Get Mappings
    @GetMapping("/getAllCustomers")
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    @GetMapping("/getCustomerById/{id}")
    public Customer getCustomerById(@PathVariable Integer id){
        return customerService.getCustomerById(id);
    }

    //Post Mapping

    @PostMapping("/addNewCustomer")
    public void addCustomer(@RequestBody Customer customer){
        customerService.addCustomer(customer);
    }

    // Put Mapping

    @PutMapping("/editCustomer")
    public void editCustomer(@RequestBody Customer customer){
        customerService.editCustomer(customer);
    }

    @PutMapping("/editCustomerById/{id}")
    public Customer editCustomerById(@RequestBody Customer newCustomer,@PathVariable int id){
        return customerService.editCustomerById(newCustomer,id);
    }

    //Delete Mapping

    @DeleteMapping("/deleteCustomerById/{id}")
    public String deleteCustomerById(@PathVariable Integer id){
        return customerService.deleteCustomerById(id);
    }

    @DeleteMapping("/deleteAllCustomer")
    public void deleteAllCustomer(){
        customerService.deleteAllCustomer();
    }
}
