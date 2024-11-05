package com.riyacooks.inventory.service;


import com.riyacooks.inventory.dao.CustomerDAO;
import com.riyacooks.inventory.entity.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class CustomerService {
    @Autowired
    CustomerDAO customerDAO;

    public List<Customer> getAllCustomers() {return customerDAO.getAllCustomers();}

    public Customer getCustomerById(Integer id) {
        return customerDAO.getCustomerById(id);
    }

    public void addCustomer(Customer customer) {
        customerDAO.addCustomer(customer);
    }

    public void editCustomer(Customer customer) {
        customerDAO.editCustomer(customer);
    }

    public Customer editCustomerById(Customer newCustomer, Integer id) {
        return customerDAO.editCustomerById(newCustomer,id);
    }
    public void deleteAllCustomer() {
        customerDAO.deleteAllCustomer();
    }

    public String deleteCustomerById(Integer id) {
        return customerDAO.deleteCustomerById(id);
    }
}
