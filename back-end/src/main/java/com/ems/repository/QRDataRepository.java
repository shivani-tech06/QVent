package com.ems.repository;

import com.ems.model.QRData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QRDataRepository extends JpaRepository<QRData, Long> {
    List<QRData> findByEventId(Long Id);

    void deleteByUsername(String username);
}
