package com.riyacooks.inventory.customexceptions;

import org.apache.catalina.User;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(int id){
        super("Couldn't Find the User with id: "+ id);
    }
}
