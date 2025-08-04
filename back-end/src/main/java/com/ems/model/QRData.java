package com.ems.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class QRData {
    public QRData() {
		super();
	}
	public QRData(long id, String username, String mobileNo, String name, long eventId, String gateEntry,
			String eventEntry, String lunch, int freq) {
		super();
		this.id = id;
		this.username = username;
		this.mobileNo = mobileNo;
		this.name = name;
		this.eventId = eventId;
		this.gateEntry = gateEntry;
		this.eventEntry = eventEntry;
		this.lunch = lunch;
		this.freq = freq;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getEventId() {
		return eventId;
	}
	public void setEventId(long eventId) {
		this.eventId = eventId;
	}
	public String getGateEntry() {
		return gateEntry;
	}
	public void setGateEntry(String gateEntry) {
		this.gateEntry = gateEntry;
	}
	public String getEventEntry() {
		return eventEntry;
	}
	public void setEventEntry(String eventEntry) {
		this.eventEntry = eventEntry;
	}
	public String getLunch() {
		return lunch;
	}
	public void setLunch(String lunch) {
		this.lunch = lunch;
	}
	public int getFreq() {
		return freq;
	}
	public void setFreq(int freq) {
		this.freq = freq;
	}
	@Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String username;
    @Column
    private String mobileNo;
    @Column
    private String name;
    @Column
    private long eventId;
    @Column
    private String gateEntry;
    @Column
    private String eventEntry;
    @Column
    private String lunch;
    private int freq;

}
