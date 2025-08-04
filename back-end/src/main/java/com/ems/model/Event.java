package com.ems.model;

import jakarta.persistence.*;


import java.util.Date;


@Entity
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    public Event() {
		super();
	}
	public Event(Long id, String name, Date date, String description, int maxAttendees, String hour, String createdBy,
			String code) {
		super();
		this.id = id;
		this.name = name;
		this.date = date;
		this.description = description;
		this.maxAttendees = maxAttendees;
		this.hour = hour;
		this.createdBy = createdBy;
		this.code = code;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getMaxAttendees() {
		return maxAttendees;
	}
	public void setMaxAttendees(int maxAttendees) {
		this.maxAttendees = maxAttendees;
	}
	public String getHour() {
		return hour;
	}
	public void setHour(String hour) {
		this.hour = hour;
	}
	public String getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	private Date date;
    private String description;
    private int maxAttendees; // Maximum number of attendees
    private String hour; // Time of the event
    private String createdBy; // Time of the event
    private String code;
    
}
