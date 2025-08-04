package com.ems.service;

import com.ems.model.QRData;
import com.ems.repository.QRDataRepository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class QRDataService {

    @Autowired
    private QRDataRepository qrDataRepository;
    private Logger log=LoggerFactory.getLogger(QRDataService.class);
    public QRData getData(long Id){
        try{
            Optional<QRData> op = qrDataRepository.findById(Id);

            if(op.isPresent()){
                return op.get();
            }
            return null;
        } catch (Exception e) {
            log.error("Error occurs while getting data from db: "+e);
            return null;
        }
    }

    public QRData createData(QRData qrData){

        try{
            Optional<QRData> op = qrDataRepository.findById(qrData.getId());

            if(op.isEmpty() && qrData!=null){
                qrData.setFreq(3);
                qrData.setGateEntry("Remaining");
                qrData.setEventEntry("Remaining");
                qrData.setLunch("Remaining");
                QRData save = qrDataRepository.save(qrData);
                return save;
            }
            return null;
        } catch (Exception e) {
            log.error("Error occurs while getting data from db: "+e);
            return null;
        }
    }

    public ResponseEntity<List<QRData>> getRegisterations(Long id) {
        try{
            List<QRData> byEventId = qrDataRepository.findByEventId(id);
            return new ResponseEntity<>(byEventId, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @Transactional
    public ResponseEntity<String> deleteData(String username) {

        try{
            qrDataRepository.deleteByUsername(username);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        }

    }
}
