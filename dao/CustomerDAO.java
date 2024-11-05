package com.riyacooks.inventory.dao;


import com.riyacooks.inventory.customexceptions.UserNotFoundException;
import com.riyacooks.inventory.entity.Customer;
import com.riyacooks.inventory.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CustomerDAO {

    @Autowired
    CustomerRepository customerRepository;

    public List<Customer> getAllCustomers() {

        List<Customer> customers = customerRepository.findAll();
        return customers;
    }
    public Customer getCustomerById(int id){
        return customerRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    public void addCustomer(Customer customer){

        customerRepository.save(customer);
    }

    public void editCustomer(Customer customer) {
        customerRepository.save(customer);
    }

    public void deleteAllCustomer() {
        customerRepository.deleteAll();
    }

    public String deleteCustomerById(Integer id) {
        if(!customerRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        customerRepository.deleteById(id);
        return "Deleted Customer with id "+ id + " from the db";
    }

    public Customer editCustomerById(Customer newCustomer, Integer id) {
        return customerRepository.findById(id)
                .map(customer -> {
                    customer.setFirst_name(newCustomer.getFirst_name());
                    customer.setLast_name(newCustomer.getLast_name());
                    customer.setEmail(newCustomer.getEmail());
                    customer.setAddress(newCustomer.getAddress());
                    customer.setMobile_no(newCustomer.getMobile_no());
                    return customerRepository.save(customer);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }
}
