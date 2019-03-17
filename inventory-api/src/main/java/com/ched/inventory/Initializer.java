package com.ched.inventory;


import com.ched.inventory.repository.InventoryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
class Initializer implements CommandLineRunner {

    private final InventoryRepository repository;

    public Initializer(InventoryRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {

        com.ched.inventory.model.InventoryItem item1 = com.ched.inventory.model.InventoryItem.builder()
                .name("Needle Nose Tweezers")
                .description("Use to get those hard to reach nose hairs.")
                .itemCode("NNT-500")
                .itemNo("522")
                .amount("50").build();

        com.ched.inventory.model.InventoryItem item2 = com.ched.inventory.model.InventoryItem.builder()
                .name("Noodle Straightener")
                .description("New and improved for those hard to straighten noodles.  Buy one now and get two more free.")
                .itemCode("NSS-200")
                .itemNo("202")
                .amount("1200").build();

        repository.save(item1);
        repository.save(item2);
    }
}
