<?php
class student {
	private $name;
	private $birthday;
	public function __construct($name, $birthDay) {
		$this->name = $name;
		$this->birthday = strtotime( $birthDay );
	}
	public function getName()
	{
		return $this->name . ' ' . date( 'm-d-Y', $this->birthday);
	}
	public function changeName ($name, $hasCourtOrder = false)
	{
		if ($hasCourtOrder) {
			$this->name = $name;
		} else {
			throw new Exception('You need a court order to do that.');
		}

	}
	
}
class desk {
	private $students = [];
	public function addStudent (student $student) {
		array_push( $this->students, $student);
//		$this->students[] = $student;
		//this.students.push(student)
	}

	/**
	 * Lists everyone at this desk
	 */
	public function  printStudents ()
	{
		foreach ($this->students as $student) {
			echo $student->getName() . PHP_EOL;
		}

	}
}
$allen = new student('Allen Hamlette', 'April 3 1981');
$allensDesk = new desk();
$allensDesk->addStudent( $allen);


$everton = new student( "Everton Webb", 'April 15 1994');
$jacob = new student( 'Jacob Ponce', 'Aug 29 1984');
$evertonsDesk = new desk();
$evertonsDesk->addStudent( $everton);
$evertonsDesk->addStudent( $jacob);
$evertonsDesk->printStudents();